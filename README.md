# @ungap/move-before

The easiest way to move or insert a node before an optional reference node, implemented following the standard decision to throw out of the blue when moving a node is not possible.

Please read [reasons and undesired side-effects](https://github.com/whatwg/dom/pull/1307) if you care about those.

### why is this necessary?

There is no standard way to know if a node can be moved, as opposite of being instered. There are checks that *might* be needed before performing a *move* operation [described in here](https://github.com/whatwg/dom/pull/1307#issuecomment-2491906616) but because the DOM API is a moving target, no matter how many manual checks we do outside internal APIs, to be sure the operation is successful we also need to `try/catch` that operation regardless.

Accordingly, nobody wins so ... why bother? This module simply does that `try/catch` without second thoughts and that's it, promoting reusable code as opposite of finding the same `try/catch` dance all over the Web.

Feel free to ignore it or use it any time you think you have `moveBefore` covered, as it will surprise and backfire if you don't `try/catch` around, that's the standard decision.
