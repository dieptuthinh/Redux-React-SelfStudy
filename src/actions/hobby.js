// action là một js object, trong đó nó sẻ quy định các cái type, playload của các aaction đó
// action creator là một cái hàm nhận vào tham số và tạo ra 1 action tương ứng
export const addNewHobby = (hobby) => {
  return {
    type: "ADD_HOBBY",
    payload: hobby,
  };
};

export const setActiveHobby = (hobby) => {
  return {
    type: "SET_ACTIVE_HOBBY",
    payload: hobby,
  };
};
