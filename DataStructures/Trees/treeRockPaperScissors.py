def rockPaperScissors(rounds):

  plays = ['rock', 'paper', 'scissors']
  rounds = rounds
  combos = []

  def generateCombos(rounds_to_go, played_so_far):

  	if rounds_to_go == 0:
  		combos.append(played_so_far)
  		return

  	for i in range(len(plays)):
  		current_play = plays[i]
  		played_so_far = played_so_far.append(current_play)
  		generateCombos(rounds_to_go - 1, played_so_far)

  generateCombos(rounds, [])
  print combos

rockPaperScissors(3)
