const stackHelpers = {
  peek(stack) {
    if (stack.top === null) {
      throw new Error('Stack is empty')
    }

    return stack.top
  },

  isEmpty(stack) {
    if (stack.top === null) {
      return true
    } else {
      return false
    }
  },

  display(stack) {
    // const s = stack
    // const disStack = []

    // while (s.top !== null) {
    //   disStack.push(s.top.data)
    //   s.top = s.top.next
    // }
    // return disStack

    const disStack = {
      data: stack.top.data,
      next: stack.top.next
    }
    return disStack
  },
}

module.exports = stackHelpers