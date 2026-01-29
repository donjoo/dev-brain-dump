Machine Learning is a way to make computers learn from data instead of being explicitly programmed.

In simple words:

Instead of telling the computer exact rules, we give it data + examples, and it figures out the rules by itself.



Machine Learning is a subset of Artificial Intelligence that enables systems to learn patterns from data and 
improve performance on a task without being explicitly programmed.



There are 3 main types (plus 1 advanced):

                    Supervised Learning

                    Unsupervised Learning

                    Reinforcement Learning

                    (Bonus) Semi-Supervised Learning


        1️⃣ Supervised Learning (MOST IMPORTANT)
        Idea

        You train the model using labeled data.

        Two types inside Supervised Learning
        🔹 A) Classification

        Output is a category

        Examples:

        Spam (yes / no)

        Fraud (true / false)

        🔹 B) Regression

        Output is a number

        Examples:

        House price → ₹45,00,000

        When to use Supervised Learning?

        ✅ When you have:

        Historical data

        Correct answers (labels)



    2️⃣ Unsupervised Learning
            Idea

            No labels ❌
            Model finds patterns on its own.

             Example

                You have customers, but no categories.

                Model groups them like:

                High spenders

                Medium spenders

                Low spenders

                You didn’t tell it these groups — it discovered them.

            Common tasks
            🔹 Clustering

                     Grouping similar data points.                    
            🔹 Dimensionality Reduction

                    Reduce features, keep important info.




    3️⃣ Reinforcement Learning (RL)
    Idea

    Learning by trial and error using rewards.



    4️⃣ Semi-Supervised Learning (Bonus)
            Idea

            Mix of:

            Small labeled data

            Large unlabeled data

            Used when labeling is expensive.



What is a Feature?
Simple definition

A feature is an individual measurable property (input variable) used by a machine learning model to 
make a prediction.





Feature Engineering (SUPER IMPORTANT)
What is it?

Creating useful features from raw data


How many features should you have?
        There’s no fixed number, but:
        Too few → underfitting
        Too many → noise, overfitting
        Rule of thumb:
        Quality > Quantity

Features are the signals the model uses to make decisions.



What is a Label?
Simple definition
A label is the correct answer (ground truth) that the model is trying to predict.



What is training?
Training is the process where a model learns patterns by comparing its predictions with 
labels and correcting itself.

What happens during training?
Model takes features (X)
Makes a prediction
Compares with labels (Y)
Calculates error (loss)
Updates internal parameters
Repeats many times 🔁


🔹 Inference (Prediction)
What is inference?
Using a trained model to make predictions on new, unseen data.
What happens during inference?
New features come in
Model applies learned patterns
Outputs prediction
No learning happens here ❌

Very important concept: Model Freeze
Once training is done:
Model weights are frozen
Inference must not modify the model
If it does → data leakage + chaos 🚨

One-line memory hook
Training teaches. Inference answers.



🔹 Underfitting
What is underfitting?
Model is too simple and fails to learn the patterns in the data.

How to fix UNDERFITTING

✅ Add better features
✅ Use more powerful model
✅ Train longer
✅ Reduce regularization




🔹 Overfitting
What is overfitting?
Model learns training data too well — including noise — and fails on new data.
How to fix OVERFITTING (very practical)

✅ More data
✅ Feature selection
✅ Regularization
✅ Early stopping
✅ Simpler 

One-line memory hook
Underfitting = didn’t learn enough
Overfitting = learned too much (including junk)





what are Bias and Variance?
🔹 Bias
Error due to overly simple assumptions in the model.
Bias says:
“The world is simple. I’ll ignore details.”

🔹 Variance
Error due to model being too sensitive to training data.
Variance says:
“Every small detail matters. I’ll memorize everything.”







Why do we split data at all?
Because ML’s real job is:
Perform well on unseen data

The three splits
1️⃣ Training Set
Purpose:
👉 Teach the model.
2️⃣ Validation Set
Purpose:
👉 Tune decisions.
3️⃣ Test Set
Purpose:
👉 Final exam.



What is Data Leakage? 🚨
Data leakage happens when information from validation/test leaks into training — directly or indirectly.


Common leakage examples (VERY IMPORTANT)
❌ 1. Using future information
Example:
Feature: account_suspended_in_next_7_days
💀 Model is literally seeing the answer.


One-line memory hook
Train to learn, validate to decide, test to trust.




ML data cleaning is about protecting the learning signal — not making data look neat.
In ML, messy data can be informative. Clean data can be dangerous.


What is Feature Engineering?
Feature engineering is the process of creating, transforming, and selecting features so 
that a model can learn meaningful patterns.


Feature engineering is teaching the model what to pay attention to.








Your domain-specific goldmine 🔥

For your prediction system, high-value features likely are:

Time-window aggregates

Behavior change rates

Ratios instead of raw counts

Early-life behavior (first X days)

Sudden spikes / anomalies

How to handle class imbalance (REAL fixes)

1️⃣ Use correct metrics (FIRST STEP)

❌ Accuracy
✅ Precision, Recall, F1
✅ Confusion Matrix
✅ PR-AUC



2️⃣ Change class weights (BEST first fix)

Tell model:

“Class 1 mistakes matter more”

Example:

class_weight = {0:1, 1:10}

This alone often fixes “predicts only 0”.



3️⃣ Resampling (careful)

Oversampling (minority)

SMOTE

Random oversampling

Pros:

Helps learning

Cons:

Overfitting risk

Undersampling (majority)

Remove some 0s

Pros:

Faster
Cons:

Data loss


Most ML problems fail not because of models, but because minority signals are ignored.















Scaling & Encoding

Big idea (remember this)

Models only understand numbers, but not all numbers are equal.

Scaling = make numbers comparable
Encoding = turn categories into numbers without lying

PART 1: Scaling
What is scaling?

Transforming numerical features so they’re on a similar range.

When scaling is REQUIRED
🚨 Scale for these models
These models care about distance / magnitude:
Logistic Regression
Linear Regression
SVM
KNN
Neural Networks
Why?
They compute distances or weighted sums

When scaling is NOT required
❌ Don’t worry for:
Decision Trees
Random Forest
XGBoost
They split by thresholds, not distances.
Scaling doesn’t hurt, but doesn’t help much.


PART 2: Encoding
Why encoding?
Models cannot understand text:
"mobile", "desktop"
We convert categories → numbers carefully.





Scaling + Encoding order (IMPORTANT)
Correct pipeline:
Split data
 → Encode categorical
 → Scale numerical
 → Train model

Never:
Scale before split
Encode using future info





