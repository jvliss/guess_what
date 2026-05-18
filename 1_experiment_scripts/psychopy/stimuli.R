#install packages
library(tidyverse)
library(writexl)
library(jsonlite)

#paths and working directory
setwd("C:/Users/Katharina Mminele/iCloudDrive/CAU/Masterarbeit/Study2_numeric/Study2")

#measure time - start
start.time <- Sys.time()

#my functions
first_digit <- function(x){
  floor(x/100)
}

my_max_min <- function(x){
  x <- sort(x)
  return(c(x[1], x[2], x[length(x)-1], x[length(x)]))
}

#Create stimuli

conditions <- c("practice", "burn_in", "warmup", "test", "attention") 

dupls = 1

while (dupls == 1){
  
  for (cond in conditions){
    
    if(cond != "attention"){
      means <- c(450, 550)
      
      if(cond == "practice"){
        n_trials <- 4
        
      }else if(cond == "burn_in"){
        n_trials <- 8
        
      }else if (cond == "warmup"){
        n_trials <- 4
        
      }else{ #cond == "test"
        n_trials <- 352 
      }
      
    }else{ #cond == "attention"
      means <- c(200, 800)
      n_trials <- 20
    }
    
    df <- data.frame(trial_type=NA, mean=NA, stim1=NA, stim2=NA, stim3=NA, stim4=NA, stim5=NA, stim6=NA, stim7=NA, stim8=NA, stim9=NA,stim10=NA,stim11=NA, stim12=NA,stim13=NA,stim14=NA,stim15=NA,stim16=NA)
    
    for (mean_total in means){
      if (mean_total %in% c(450, 550)){
        values <- 100:899
      }else if (mean_total == 200){
        values <- 100:300
      }else{#mean_total == 800
        values <- 700:900
      }
      
      if (cond %in% c("practice", "test")){
        
        min_max_indicator <- c(rep(NA, times = (n_trials/2))) #will store % of trials where considering only max/min would be correct -> should be below .5

        for (i in 1:(n_trials/2)){
          min_max_check <- 1
          while (min_max_check == 1){
            digit_count = 0
            while(digit_count == 0){
              m = 0
              while(m != mean_total){
                sa <- sample(values, 16)
                m <- mean(sa)
              }#end while to find 16 values with the correct mean
              over <- sum(first_digit(sa) > 4)
              under <- sum(first_digit(sa) < 5)
              if((mean_total < 500) & (under > over)){
                digit_count = 1
              }else if((mean_total > 500) & (over > under)){
                digit_count = 1
              }else{
                digit_count = 0
              }
            }#end while digit_count
            
          #   m = 0
          #   while (m != mean_total){
          #     sa <- sample(values, 16)
          #     m <- mean(sa)
          #   }#end while to find 15 values with correct mean
          #   
          #   
            min_max_indicator[i] <- ifelse((mean(my_max_min(sa)) > 500) & (mean_total > 500), 1,
                                             ifelse((mean(my_max_min(sa)) < 500) & (mean_total < 500), 1, 0))

            if ((sum(min_max_indicator[1:i])/(n_trials/2)) > .5){
              min_max_check <- 1
            }else{
              min_max_check <- 0
              sa <- c(cond, mean_total, sa)
              df <- rbind(df, sa)
            }
            print(paste("i = ", i))
          }#end while min_max_check
        }
      }else{#cond != practice | test
        for (i in 1:(n_trials/2)){
          digit_count = 0
          while(digit_count == 0){
            m = 0
            while(m != mean_total){
              sa <- sample(values, 16)
              m <- mean(sa)
            }#end while to find 16 values with correct mean
            over <- sum(first_digit(sa) > 4)
            under <- sum(first_digit(sa) < 5)
            if((mean_total < 500) & (under > over)){
              digit_count = 1
            }else if((mean_total > 500) & (over > under)){
              digit_count = 1
            }else{
              digit_count = 0
            }
          }#end while digit count
          
          # m = 0
          # while (m != mean_total){
          #   sa <- sample(values, 16)
          #   m <- mean(sa)
          # }
          
          sa <- c(cond, mean_total, sa)
          df <- rbind(df, sa)
          
        }
        print(paste("i = ", i))
      }#if_else cond == "test"
    }#end for-loop mean_total in means
    
    df <- df[-1,] #delete first row (NAs)
    
    print(table(df$mean)) #checking; must be equal amount of mean_total
    
    if(cond == "practice"){
      check_order = 1
      while(check_order == 1){
        trials <- 1:nrow(df)
        order <- sample(trials)
        df <- df[order,]
        if(all(df$mean == c(450, 550, 550, 450)) | all(df$mean == c(550, 450, 450, 550))){
          check_order = 0
        }else{
          check_order = 1
        }
      }
    }else if(cond == "warmup" | cond == "burn_in"){
      trials <- 1:nrow(df)
      order <- sample(trials)
      df <- df[order,]
    }else{#cond == test | cond == attention
      order <- NA
      for(i in 1:(nrow(df)/2)){#creates order of alternating 450 & 550; important for split and spacing of attention checks -> lines 214ff
        order <- c(order, i, nrow(df)+1-i)
      }
      order <- order[-1]
      df <- df[order,]
    }
    # if(cond != "attention" & cond != "test"){
    #   trials <- 1:nrow(df)
    #   order <- sample(trials)
    # }else{
    #   order <- NA
    #   for(i in 1:(nrow(df)/2)){
    #     order <- c(order, i, nrow(df)+1-i)
    #   }
    #   order <- order[-1]
    # }
    # 
    # df <- df[order,]
    
    if (cond=="practice"){
      df_practice <- df
    }else if (cond == "burn_in"){
      df_burn_in <- rbind(df_practice, df)
    }else if (cond == "test"){
      df_test <- df 
      # trials have to be ordered, so that means and "hard trials" will later be equally distributed across all test blocks
      for(i in 1:nrow(df)){
        df_test[i, "indicator"] <- ifelse((mean(my_max_min(as.numeric(as.vector(df[i, grepl("stim", colnames(df))])))) > 500) & (df[i, "mean"] > 500), 1, 
                                     ifelse((mean(my_max_min(as.numeric(as.vector(df[i, grepl("stim", colnames(df))])))) < 500) & (df[i, "mean"] < 500), 1, 0))
      }
      df_test <- df_test[order(df_test$mean, df_test$indicator),]
      q1 <- c(1:(nrow(df_test)*0.25))
      q2 <- c((nrow(df_test)*0.25 + 1):(nrow(df_test)*.5))
      q3 <- c((nrow(df_test)*0.5 + 1):(nrow(df_test)*.75))
      q4 <- c((nrow(df_test)*.75 + 1):(nrow(df_test)))
      order <- c(rbind(q1, q2, q3, q4))
      df_test <- df_test[order,]
      df_test <- df_test[,-which(colnames(df_test) %in% c("indicator"))]
    }else if (cond == "warmup"){
      df_warmup <- df
    }else{
      df_attention <- df
    }
    
    if (cond == "attention"){
      subs_test <- split(df_test, rep(1:4, length.out = nrow(df_test), each = ceiling(nrow(df_test)/4)))
      subs_warmup <- split(df_warmup, rep(1:4, length.out = nrow(df_warmup), each = ceiling(nrow(df_warmup)/4)))
      subs_attention <- split(df_attention, rep(1:4, length.out = nrow(df_attention), each = ceiling(nrow(df_attention)/4)))
      
      test <- data.frame()
      for(i in 1:length(subs_test)){
        print(paste("Spacing attention checks in Block ", i))
        
        check <- 1
        block <- rbind(subs_warmup[[i]], subs_test[[i]], subs_attention[[i]])
        trials <- 2:nrow(block)
        while(check == 1){
          order <- c(1, sample(trials))
          print(order)
          block <- block[order,]
          spaces <- c(rep(NA, times = nrow(block)))
          for(i in 1:nrow(block)){
            ifelse(block[i,"mean"] %in% c(200,800), spaces[i] <- i, spaces[i] <- NA)
          }
          spaces <- na.omit(spaces)
          spaces <- diff(spaces)
          print(spaces)
          if (!any(spaces < 11)) check <- 0 #at least 10 trials before next attention check
        }#end while check == 1
        test <- rbind(test, block)
      }#end for(i in 1:length(subs_test))
      df <- rbind(df_burn_in, test)
      # print("starting to space attention checks")
      # check <- 1
      # 
      # while(check == 1){
      #   test <- data.frame()
      #   
      #   for (i in 1:length(subs_test)){
      #     block <- rbind(subs_warmup[[i]], subs_test[[i]], subs_attention[[i]])
      #     trials <- 2:nrow(block)
      #     order <- c(1, sample(trials))
      #     block <- block[order,]
      #     test <- rbind(test, block)
      #   }
      #   
      #   spaces <- c(rep(NA, times = nrow(test)))
      #   for(i in 1:nrow(test)){
      #     ifelse(test[i,"mean"] %in% c(200,800), spaces[i] <- i, spaces[i] <- NA)
      #   }
      #   spaces <- na.omit(spaces)
      #   spaces <- diff(spaces)
      #   print(spaces)
      #   if (!any(spaces < 11)) check <- 0 #at least 10 trials before next attention check
      #   
      # }#end while check == 1
      # df <- rbind(df_burn_in, test)
    }#end if cond == "attention"
    
  }#end for(cond in conditions)
  
  print("now checking for duplicates")
  #are there any duplicates?
  if (sum(duplicated(df))==0){
    dupls <- 0
  }
  
}#end: dupls

system('CMD /C "ECHO Der Prozess ist endlich durch... juhu! && PAUSE"',invisible=FALSE, wait=FALSE)

#measure time - end
end.time <- Sys.time()

time.taken <- round(end.time - start.time,2)
print(time.taken)

#check (test-blocks)
table(df$mean) #equal, because warmup trials are different each time
df_check <- df[df[,"trial_type"] %in% c("test", "attention"),] 
df_check <- split(df_check, rep(1:4, length.out = nrow(df_check), each = ceiling(nrow(df_check)/4)))
for(i in 1:length(df_check)){
  print(table(df_check[[i]]$mean))
} # all 4 blocks should have equal amount of 400/600 and 200/800 trials


#Create all possible positions
x_pos <- round(seq(-0.7, 0.7, length.out = 20), digits = 3) 
y_pos <- round(seq(-0.265, 0.45, length.out = 14), digits = 3)

positions <- NA

for(x in 1:length(x_pos)){
  for(y in 1:length(y_pos)){
    new_position <- paste(x_pos[x],y_pos[y], sep = ",")
    positions <- c(positions, new_position)
  }
}
positions <- positions[-1]
positions <- data.frame(position = positions)


#assign random position for stimuli 
for (i in 1:nrow(df)){
  check_pos <- 1
  
  while(check_pos == 1){
    pos <- sample(positions$position, size = 16, replace = F)
    df[i, "x_pos1"] <- as.numeric(strsplit(pos[1], ",")[[1]][1])
    df[i, "x_pos2"] <- as.numeric(strsplit(pos[2], ",")[[1]][1])
    df[i, "x_pos3"] <- as.numeric(strsplit(pos[3], ",")[[1]][1])
    df[i, "x_pos4"] <- as.numeric(strsplit(pos[4], ",")[[1]][1])
    df[i, "x_pos5"] <- as.numeric(strsplit(pos[5], ",")[[1]][1])
    df[i, "x_pos6"] <- as.numeric(strsplit(pos[6], ",")[[1]][1])
    df[i, "x_pos7"] <- as.numeric(strsplit(pos[7], ",")[[1]][1])
    df[i, "x_pos8"] <- as.numeric(strsplit(pos[8], ",")[[1]][1])
    df[i, "x_pos9"] <- as.numeric(strsplit(pos[9], ",")[[1]][1])
    df[i, "x_pos10"] <- as.numeric(strsplit(pos[10], ",")[[1]][1])
    df[i, "x_pos11"] <- as.numeric(strsplit(pos[11], ",")[[1]][1])
    df[i, "x_pos12"] <- as.numeric(strsplit(pos[12], ",")[[1]][1])
    df[i, "x_pos13"] <- as.numeric(strsplit(pos[13], ",")[[1]][1])
    df[i, "x_pos14"] <- as.numeric(strsplit(pos[14], ",")[[1]][1])
    df[i, "x_pos15"] <- as.numeric(strsplit(pos[15], ",")[[1]][1])
    df[i, "x_pos16"] <- as.numeric(strsplit(pos[16], ",")[[1]][1])
    df[i, "y_pos1"] <- as.numeric(strsplit(pos[1], ",")[[1]][2])
    df[i, "y_pos2"] <- as.numeric(strsplit(pos[2], ",")[[1]][2])
    df[i, "y_pos3"] <- as.numeric(strsplit(pos[3], ",")[[1]][2])
    df[i, "y_pos4"] <- as.numeric(strsplit(pos[4], ",")[[1]][2])
    df[i, "y_pos5"] <- as.numeric(strsplit(pos[5], ",")[[1]][2])
    df[i, "y_pos6"] <- as.numeric(strsplit(pos[6], ",")[[1]][2])
    df[i, "y_pos7"] <- as.numeric(strsplit(pos[7], ",")[[1]][2])
    df[i, "y_pos8"] <- as.numeric(strsplit(pos[8], ",")[[1]][2])
    df[i, "y_pos9"] <- as.numeric(strsplit(pos[9], ",")[[1]][2])
    df[i, "y_pos10"] <- as.numeric(strsplit(pos[10], ",")[[1]][2])
    df[i, "y_pos11"] <- as.numeric(strsplit(pos[11], ",")[[1]][2])
    df[i, "y_pos12"] <- as.numeric(strsplit(pos[12], ",")[[1]][2])
    df[i, "y_pos13"] <- as.numeric(strsplit(pos[13], ",")[[1]][2])
    df[i, "y_pos14"] <- as.numeric(strsplit(pos[14], ",")[[1]][2])
    df[i, "y_pos15"] <- as.numeric(strsplit(pos[15], ",")[[1]][2])
    df[i, "y_pos16"] <- as.numeric(strsplit(pos[16], ",")[[1]][2])
    
    print("all positions set; now checking")
    
    quad = vector(mode = "numeric", length = 16)
    
    for (j in 1:16){
      x = paste("x_pos", j, sep = "")
      y = paste("y_pos", j, sep = "")
      
      if((df[i,x] < 0) & (df[i,y] > 0.0925)){
        quad[j] = 1
      }else if ((df[i,x] > 0) & (df[i,y] > 0.0925)){
        quad[j] = 2
      }else if ((df[i,x] < 0) & (df[i,y] < 0.0925)){
        quad[j] = 3
      }else if ((df[i,x] > 0) & (df[i,y] < 0.0925)){
        quad[j] = 4
      }else{
        quad[j] = NA
      }
    }
    quad_1 = sum(quad == 1, na.rm = T)
    quad_2 = sum(quad == 2, na.rm = T)
    quad_3 = sum(quad == 3, na.rm = T)
    quad_4 = sum(quad == 4, na.rm = T)
    
    ifelse(quad_1 == 0 | quad_2 == 0 | quad_3 == 0 | quad_4 == 0, check_pos <-  1, check_pos <-  0)
    
    if(check_pos == 1){
      print("I found something - repeating")
    }
  }
}

df <- df %>% 
  mutate_at(c("mean", "stim1", "stim2", "stim3", "stim4", "stim5", "stim6", "stim7", "stim8",
              "stim9", "stim10", "stim11", "stim12", "stim13", "stim14", "stim15", "stim16"), 
            as.numeric) %>% 
  mutate(block = ifelse(trial_type == "practice", 0, ifelse(trial_type == "burn_in", 1, NA)))
help <- c(rep(c(2,3,4,5), each = 94)) # To Do: adjust each to number of trials in test blocks (warmup + test + attention)
df$block[is.na(df$block)] <- help

#clean up
rm(list = ls()[!ls() %in% c("df", "time.taken")])

#check blocks and view df before saving

##block 0 == practice (16)
##block 1 == burn_in (8)
##block 2-5 == test block with warmup_test_attention trials (n = 1 + 88 + 5 = 94)
table(df$block)
view(df)

# save stimuli as rda
save(df, file = "stimuli.rda")

#write json

out = c(list(practice = as.list(df[df[,"block"]=="0",]), 
             burn_in = as.list(df[df[,"block"]=="1",]), 
             test_1 = as.list(df[df[,"block"]=="2",]), 
             test_2 = as.list(df[df[,"block"]=="3",]), 
             test_3 = as.list(df[df[,"block"]=="4",]), 
             test_4 = as.list(df[df[,"block"]=="5",])))

names(out) <- NULL
write_json(out, 'stimuli.json', pretty=T)

end.time <- Sys.time()
time.taken <- round(end.time - start.time,2)
print(time.taken)