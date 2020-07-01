---
title: "My Summer with TensorFlow"
date: "2019-07-23"
---

## Get in the TensorFlow.
This summer I took a research internship that I originally thought was going to have me working on my passion: computer graphics. However, when I showed up for my first day in June, I was assigned to a machine learning and computer vision project. I was, quite honestly, a little disappointed. I took my assignment in stride though as I knew that machine learning would be a very valuable and applicable skill to the modern world of computer science. And so, I sat down at my desk on my first day and began watching Google's Machine Learning Crash Course from the beginning, knowing I would have to go from novice to actionable results in 10 work weeks.

Our project involves using human action recognition to identify what sort of medical procedure is being performed in the field by people such as EMTs and military personnel. This way, we can transmit this data to the primary care physician and cut down communication time and mistakes when transferring the patient.

### Learning the Basics
This is what the [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course/ml-intro) was good for. Using my previous knowledge from college statistics and linear algebra, it was fairly simple to pick up on concepts and techniques in areas such as loss reduction, generalization, and regularization.

These lessons slowly introduce the TensorFlow library and its uses across all of these concepts. However, I found the examples in this hard to follow, mostly because they use TensorFlow 1.x examples which are very different from the imperative programming style most people are used to in languages like Python or C++. TensorFlow 2.x was recently introduced into beta and I must saw it's a better time than ever to get into machine learning.

The [changes](https://medium.com/tensorflow/whats-coming-in-tensorflow-2-0-d3663832e9b8) in TensorFlow 2.0 focus on simplifying model building an introducing eager execution. High level APIs such as [Keras](https://keras.io/) make creating and deploying your first neural network very easy. When explaining TensorFlow's workflow to someone, I always mention that the hard part is understanding what you need to do, not how to do it.

### What You Need to Do (and How to Do It)
I've split my work at my job into a couple of discrete stages
1. Write Python/TensorFlow code
2. Collect and label data
3. Run the code on the collected data on Amazon Web Services

#### Writing the Python/TensorFlow code
My branch of the project is meant to work with raw frame data. That being said I was able to use the Keras `ImageDataGenerator` object and the `flow_from_directory()` function to collect and label all of the data inside TensorFlow. Of course, I had to manually label the data in the directory in a file structure that looked something like

![file structure.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1563898219589/-ikBFHw0P.png)

Where each subfolder contains one subfolder for each medical procedure we are testing for. Each of the medical procedure folders contain all of the frame `.jpg` files for that procedure in that dataset. Keras is able to parse this dataset and know that an image that is under `Data > Training > Administer Medication` should be placed in the training dataset as an example of Administering medication. It saves us a lot of time if we can get the folder structure setup in this way.

```
# Here is a generator that loads the training data into TensorFlow
train_gen = train_datagen.flow_from_directory(directory=train_path,
                                    target_size=(224,224), # downscale to this resolution from 4K
                                    color_mode='rgb', # basically if it's in color of b&w
                                    batch_size=32, # how many samples are processed at once
                                    class_mode='categorical', # we want to know what category each thing is under
                                    shuffle=True # randomize placement of the photos
)
``` 

Next we need to set up our model. I won't go into the intricate details of how I built this model as each use case is different and it's a lot of guesswork at the end of the day. But if you use the `keras.models.Sequential()` object as your model, it is as simple to build a model as stringing together a bunch of `model.add(...)` commands where the parameter entered are `keras.layers` objects.

Finally, we compile and fit the neural network. Here I used the `fit_generator()` function because we use an `ImageDataGenerator` to load our data into Tensorflow.

```
model.compile(loss='categorical_crossentropy',
            optimizer=opt,
            metrics=['accuracy']
)

# train the neural net
model.fit_generator(generator=train_gen,
                    steps_per_epoch=STEP_SIZE_TRAIN,
                    validation_data=valid_gen,
                    validation_steps=STEP_SIZE_VALID,
                    epochs=5
)
```

My `steps_per_epoch` and `validation steps` variables are calculated from dividing the total number of objects in the training generator and validation generator by the batch size of each.

Lastly, we test against the test set of data to see what our testing accuracy against an unknown dataset is
```
test_loss, test_acc = model.evaluate_generator(test_gen,
                                            test_num)

# print test accuracy
print('Accuracy: {}'.format(test_acc))
```
#### Collect and Label the Data
The data was given to me as 4K video files recorded by a GoPro camera. The 2 to 3 hour recordings we split into 8 minute video segments. At the time of my onboarding onto this project, we had 7 different subjects recorded from 4 different camera angles.

To start, I just wanted the raw frame data from the videos. So I used ffmpeg to concatenate all of the videos and then split them into their constituent frames. By concatenating them first, I was able to label them with their frame number in sequential order. After they were extracted and labeled with their frame number within the video, I uploaded them to a S3 bucket on Amazon Web Services. After they were uploaded, I used a spreadsheet that I was given that had the videos listed by what time they occurred in the video to label them into their correct procedure folder. I let the first 5 subjects be training data, the 6th be validation and the 7th be testing. A pretty simple Boto3 Python script was able to do this all for me.

At this point we have terabytes of frame data labeled on Amazon Web Services under which procedure and data set they belong in. Now we just need to run the TensorFlow Script

#### Running the Code on AWS
I used the Ubuntu Deep Learning Base AMI on a p3.2xlarge instance with an EBS storage drive plenty large to hold all of our data. I set it up to use GPUs and TensorFlow [according to Google's own guide](https://www.tensorflow.org/guide/using_gpu). I also installed Python and all of the packages I would need to run my code.

I mounted the EBS drive and recursively copied the Data folder from S3 to my EC2 instance. I downloaded my TensorFlow script and after some debugging, I was able to get it running!

*Note: If you want to run your script overnight to train, don't forget to use `tmux` if you want to terminate the SSH connection. [Helpful](https://stackoverflow.com/questions/21193988/keep-server-running-on-ec2-instance-after-ssh-is-terminated)*

## Conclusion
I've spent about 7 and a half weeks getting familiar with TensorFlow and working on other odd jobs around the lab. I know this doesn't seem like a lot for 7 weeks of work but understand that this neural network structure went through several iterations of prototypes on my personal machine before I was confident enough to run it on a paid service like AWS. Several weeks were also spent running examples and doing other tasks to build my skills in ML.

In terms of results from this, I don't have them yet. It takes a hot second to train a neural network and I'm writing this as it trains. I'll give an update later if I'm not ashamed of the result.