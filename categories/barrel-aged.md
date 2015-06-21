---
layout: category
title: Barrel Aged
permalink: '/categories/barrel-aged.html'
---

## Blog Posts

{% for post in site.categories['barrel aged'] %}
  *  [ {{ post.title }} ]({{ post.url }})
{% endfor %}
