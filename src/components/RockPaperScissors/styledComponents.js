import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export const ResultContainer = styled.div`
  padding: 8px 16px 8px 16px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    padding: 8px 24px 8px 24px;
  }
`

export const Option = styled.h1`
  font-size: 24px;
  font-family: 'Bree Serif';
  font-weight: 500;
  color: #ffffff;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  @media screen and (min-width: 768px) {
    width: 20%;
    max-width: 150px;
  }
`

export const ScorePhrase = styled.p`
  font-family: 'Bree Serif';
  font-size: 16px;
  font-weight: 700;
  color: #223a5f;
  margin-bottom: 0px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const ScoreNumber = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
  color: #223a5f;
  margin-top: 0px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`

export const GameViewContainer = styled.div`
  width: 65%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameOptionsList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  max-width: 480px;
`

export const PopupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const TriggerButton = styled.button`
  font-family: 'Roboto'
  font-size: 16px;
  font-weight: 700px;
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`

export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`

export const PopUpImage = styled.img`
  width: 85%;
  align-self: center;
  margin: 20px 40px 10px 50px;
`

export const PopUpBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
`

export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  justify-content-center;
`

export const SelectedOptionsContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 600px;
  justify-content: space-between;
`

export const GameUserOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GameParticipantText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`

export const GameParticipantChoiceImage = styled.img`
  width: 170px;
  height: 170px;
`

export const ResultText = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
`

export const PlayAgainButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  color: #223a5f;
  font-weight: 400;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  align-self: center;
`
