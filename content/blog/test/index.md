--- 
title:  "Variational Coin Toss"
date:   2017-05-07 17:19:02 +0200
tags: ["probability", ]
author_name: Bj&ouml;rn Smedman
author_url: /author/bjorn
author_avatar: bjorn
show_avatar: true
read_time: 30
use_math: true
feature_image: feature-coin-toss
published: true
---

Variational inference is all the rage these days, with new interesting papers
coming out almost daily. But diving straight into
[Huszár (2017)](https://arxiv.org/abs/1702.08235) or
[Chen et al (2017)](https://arxiv.org/abs/1611.02731) can be a challenge,
especially if you're not familiar with the basic concepts and underlying math.
Since it's often easier to approach a new method by first applying it to a known
problem I thought I'd walk you through variational inference applied to 
the classic "unfair coin" problem.

If you like thinking in code you can follow along in this
[Jupyter notebook](https://github.com/openias/openias.github.io/blob/master/notebooks/variational_coin.ipynb).

## The Usual Bayesian Treatment of an Unfair Coin

Okay, so we got the usual problem statement: You've found a coin in a magician's
pocket. Since you found it in a magician's pocket you're not sure it's a "fair
coin", i.e. one that has a 50% chance of landing heads up when you toss it;
it could be a "magic" coin, one that comes up heads with probability $z$ instead.

So you toss the coin a few times and it comes up tails, heads, tails, tails and
tails. What does that tell you about $z$? Let's bring out the (hopefully)
familiar Bayesian toolbox and find out.

### Choosing a Prior

First we need to place a prior probability distribution over $z$.
Since we found the coin in a magician's pocket we think that $z$ may very well
be quite far from $0.5$. At the same time; there's nothing obviously
strange about the coin, so it seems improbable that $z$ would be very high
or very low. We therefore choose $p(z) = \text{Beta}(\alpha = 3, \beta = 3)$ as our
prior.

![Prior probability distribution over z](/img/variational-coin-prior.png)
<p class="caption">Figure 1. Prior probability distribution over $z$.</p>


### Classic Bayesian Inference

When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

$a$



