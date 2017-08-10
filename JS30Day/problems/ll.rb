class Link
  attr_accessor :val, :next

  def initialize(val, next_node)
      @val = val
      @next = next_node
  end
end

class LinkedList
  attr_accessor :head

  def initialize(val)
    @head = Link.new(val, nil)
  end

  def add(val)
    current = @head
    while current.next != nil
      current = current.next
    end
    current.next = Link.new(val, nil)
  end

  def delete(val)
    current = @head

    if current.val == val
      @head = current.next
    else
      while (current.next != nil) && (current.next.val != val)
        current = current.next
      end
      unless current.next == nil
        current.next = current.next.next
      end
    end

    # current = @head
    # temp = nil
    # previous = nil
    # while current != nil
    #   if current.val == val
    #     temp = current.next
    #     previous.next = temp
    #     return true
    #   else
    #     previous = current
    #     current = current.next
    #   end
    # end
    #
    # return false
  end

  def return_list
    elements = []
    current = @head
    while current.next != nil
      elements << current
      current = current.next
    end
    elements << current
  end
end

linked_list = LinkedList.new(1)
linked_list.add(2)
linked_list.add(3)
linked_list.add(4)
p linked_list
linked_list.delete(4)
p linked_list
# p linked_list.return_list
