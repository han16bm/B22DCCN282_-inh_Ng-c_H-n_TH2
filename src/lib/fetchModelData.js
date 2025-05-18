/**
 * fetchModel - Gửi yêu cầu GET đến server để lấy model dữ liệu.
 *
 * @param {string} url - Đường dẫn API tương đối (ví dụ: "/user/list")
 * @returns {Promise<any>} - Promise trả về dữ liệu JSON hoặc null nếu lỗi
 */
function fetchModel(url) {
  return fetch("https://kntzm5-8081.csb.app/api" + url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Lỗi khi fetchModel:", error.message);
      return null;
    });
}

export default fetchModel;