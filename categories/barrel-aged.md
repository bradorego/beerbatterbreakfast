---
layout: category
title: Barrel Aged
permalink: '/categories/barrel-aged'
---

## Blog Posts

{% for post in collections['barrel aged'] %}
  * <a href="{{post.url}}"  target="_self">{{ post.title }}</a>
{% endfor %}
