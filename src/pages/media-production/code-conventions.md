---
layout: home.njk
title: Code conventions
tags: ['nav', 'media']
---

This area contains information and guidelines on how we tend to write our code. These guidelines are not necessarily *prescriptive* but rather *descriptive* and as such cover information on
how we might write and organise our code. Additions are more than welcome for personal style or for re-usable snippets of code.

<div class="adx-direction-warning"><h5>Note:</h5>
    <p>The end goal of our code is that it is sustainable and maintainable – as long as the code makes logical sense, code editors can display the code however you like, but this serves as a loose guide on keeping things consistent and logical.</p>
</div>

### Variable Naming

For variables, we try to use camel case or kebab case when writing variable names which contain more than one word and in some cases, we also make use of snake case. Examples are as follows:

#### Camel Case

Camel Case naming uses lowercase letters for the first word with each subsequent word starting with a capital letter. This would be the default style the LRD team recommends as it follows the conventions
of most JavaScript functions or methods.

```js
    var variableName = "name";
```

#### Kebab Case

Kebab Case naming uses lowercase letters for the entire variable, separating words with a hyphen (-).

```js
    var variable-name = "name";
```

#### Constant Variables

Constant variables, `const`, are variables which cannot be reassigned. While it is not required, it is common convention to write constant variables in all-caps and using snake case capitalisation. Snake Case naming separates words with an underscore (_). This works well for constant variables to make it clear where word breaks are.

```js
    const API_KEY = "";
```

### Bracket Placement and indentation

Bracket placement is not as crucial as variable naming conventions as this is something code editors can reformat as needed. However, it is recommended you follow one of the following styles for consistency. The main difference between them is where each bracket `{}` sits when placed after a control statement (`if`, `for`, `function()`).

For indentation, we typically use tabs for code, but this is not a hard rule as long as the code blocks line up.

#### K&R 

```js
    if (statement) {
        something();
        somethingElse();
    }
```

#### Allman

```js
    if (statement) 
    {
        something();
        somethingElse();
    }
```

### Useful code snippets

Add your own re-usable snippets here (until we build our own API) as you write them. Loops, sorting, finding a value, etc.