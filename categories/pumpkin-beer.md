---
layout: category
title: Pumpkin Beers
permalink: '/categories/pumpkin-beer.html'
---

## Blog Posts

{% for post in site.categories['pumpkin beer'] %}
  *  [ {{ post.title }} ]({{ post.url }})
{% endfor %}
