---
layout: category
title: Fruit Beers
permalink: '/categories/fruit-beer.html'
---

## Blog Posts

{% for post in site.categories['fruit beer'] %}
  *  [ {{ post.title }} ]({{ post.url }})
{% endfor %}
