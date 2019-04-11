// TODO: add and export your own actions

export const GET_MESSAGES = 'GET_MESSAGES';

export default function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then(data => data);

  return {
    type: GET_MESSAGES,
    payload: promise
  };
}
