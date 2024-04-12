import {OptionImage, OptionListItem, GameOptionButton} from './styledComponents'

const GameOptions = props => {
  const {optionDetails, onClickSetUserChoice} = props
  const {imageUrl, id} = optionDetails
  const userChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <OptionListItem>
      <GameOptionButton
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={userChoice}
      >
        <OptionImage src={imageUrl} alt={id} />
      </GameOptionButton>
    </OptionListItem>
  )
}

export default GameOptions
