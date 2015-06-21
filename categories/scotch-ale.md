---
layout: category
title: Scotch Ales
permalink: '/categories/scotch-ale.html'
---

## Blog Posts

{% for post in site.categories['scotch ale'] %}
  *  [ {{ post.title }} ]({{ post.url }})
{% endfor %}
