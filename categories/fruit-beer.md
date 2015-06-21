---
layout: category
title: Fruit Beers
permalink: '/categories/fruit-beer.html'
---

## Blog Posts

{% for post in site.categories['fruit beer'] %}
  * {{ balanced | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}
