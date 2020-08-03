---
layout: category
title: Brown Ales
permalink: '/categories/brown-ale'
---

## Blog Posts

{% for post in collections['brown ale'] %}
  * <a href="{{post.url}}"  target="_self">{{ post.title }}</a>
{% endfor %}
