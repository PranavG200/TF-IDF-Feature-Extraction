# TF-IDF-Feature-Extraction

The App dataset consists of two classes (M/B) having numerous text files which corresponds to execution traces of applications in the Operating System. The attributes are different calls invoked by the application while executing each sample for fixed duration. In this experiment the following tasks have been performed :

[1] Understanding the representation of features which are system calls (Boolean Occurrence of calls or TF-IDF(Term Frequency and Inverse document frequency)). 
1.2 Preparing a machine learning model using different kernels and reporting which feature representation is better and subsequently which model gives improved performance (graphical output with diverse representations on feature vectors)
1.3 ROC plot and report of output in tabular format consisting of precision, recall, F1_measure and Accuracy. 
1.4 Estimate of training and test for diverse settings of the experiments

[2] Creating categories of attributes where the call must be represented in the form of sequence of two system calls/three calls. Sequences are considered in sliding window fashion. Repeating the experiments of question [1] on this revised dataset.

Examples of feature: Let us consider a training example
Open, read, connect, ioctl, ioctl, mmap, mprotect, mmap, clone
Features are:
2 sequence: open-read, read-connect, connect-ioctl, ioctl-ioctl…etc
3 sequence: open-read-connect, read-connect-ioctl, connect-ioctl-ioctl etc

[3] Understanding feature selection approaches implemented as a part of Sklearn
Examples of feature: Let us consider a training example
Open, read, connect, ioctl, ioctl, mmap, mprotect, mmap, clone
Features are:
2 sequence: open-read, read-connect, connect-ioctl, ioctl-ioctl…etc
3 sequence: open-read-connect, read-connect-ioctl, connect-ioctl-ioctl etc

Report about set of attributes having high score.

[4] Implementation of clustering techniques on the same dataset and which clustering algorithm generates better quality of clusters. Report of metrics to understand the quality of clusters
