import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: 40,
    paddingHorizontal: '10%',
  },
  cardContainer: {
    width: '80%',
    marginTop: 40,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    marginHorizontal: '10%',
  },
  titleStyle: {
    marginBottom: 20,
  },
  usernameStyle: {
    borderColor: '#acacac',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 5,
  },
  addButtonStyle: {
    backgroundColor: '#acf',
    marginBottom: 40,
  },
  itemCardStyle: {
    marginBottom: 20,
    padding: 10,
  },
  cardActionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  editCardButtonAction: {
    backgroundColor: '#acf',
  },
  cardText: {
    fontSize: 16,
  },
});

export default styles;
