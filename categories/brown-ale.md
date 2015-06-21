---
layout: category
title: Brown Ales
permalink: '/categories/brown-ale.html'
---

## Blog Posts

{% for post in site.categories['brown ale'] %}
  *  [ {{ post.title }} ]({{ post.url }})
{% endfor %}
