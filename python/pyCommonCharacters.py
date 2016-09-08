# /**
#  * Write a function `f(a, b)` which takes two strings as arguments and returns a
#  * string containing the characters found in both strings (without duplication), in the
#  * order that they appeared in `a`. Remember to skip spaces and characters you
#  * have already encountered!
#  *
#  * Example: commonCharacters('acexivou', 'aegihobu')
#  * Returns: 'aeiou'
#  *
#  * Extra credit: Extend your function to handle more than two input strings.
#  */

def commonCharacters(string1, string2):
  # // TODO: Your code here!
  cache1 = {};
  cache2 = {};
  answer = '';
  
  for i in string1:
    cache1[string1[i]] = true;

  for i in string2:
    cache[string2[i]] = true;

  for k in cache1:
    if k in cache2:
      answer += key

  return answer;
