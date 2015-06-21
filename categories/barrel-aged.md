---
layout: category
title: Barrel Aged
permalink: '/categories/barrel-aged.html'
---

## Blog Posts

{% for post in site.categories['barrel aged'] %}
  * {{ balanced | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}
