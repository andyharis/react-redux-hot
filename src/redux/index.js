export default actions => dispatch => {
  return actions.map((action) => {
    return {[action]: dispatch(action)}
  });
}