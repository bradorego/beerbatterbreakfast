---
layout: page
title: Categories
eleventyExcludeFromCollections: true
---

{% for post in collections.sorted-category %}

* {% include "simple-list-item-link.html", post:post %}

{% endfor %}