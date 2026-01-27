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