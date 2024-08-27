import * as React from 'react';
import './student-list.css';

export const StudentList = (props) => {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState('');

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {isError}</div>

  return <div className="student-list">

    <div className="list">
      {data.map(student => {
        const { id, first_name, last_name, email, avatar } = student;
        return <div className="student" key={id}>
          <img src={avatar} alt={first_name} />
          <div>{first_name} {last_name}</div>
          <div>{email}</div>
        </div>
      })}
    </div>


    <button onClick={async () => {
      setIsLoading(true);
      try {
        // gọi api
        const response = await fetch('https://reqres.in/api/users'); // bytes
        const responseJSON = await response.json();
        // {
        //   "id": 1,
        //   "email": "george.bluth@reqres.in",
        //   "first_name": "George",
        //   "last_name": "Bluth",
        //   "avatar": "https://reqres.in/img/faces/1-image.jpg"
        // }
        setData(responseJSON.data)
      } catch (error) {
        setIsError(error.message);
      }

      //
      setIsLoading(false);
    }}>Lấy danh sách học viên</button>
  </div>;
};

StudentList.propTypes = {};

StudentList.defaultProps = {};
