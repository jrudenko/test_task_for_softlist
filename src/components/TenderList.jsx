// import { Button, Table } from 'antd';
// import axios from 'axios';
// import React, { Component } from 'react';
// const express = require('express');
// // const axios = require('axios');

// const app = express();
// const port = 3000;


// class TenderList extends Component {
//   state = {
//     tenders: [],
//     loading: false
//   };

//   fetchTenders = () => {
//     this.setState({ loading: true });

//     app.get('/api/tenders', (req, res) => {
//       const apiUrl = 'https://public.api.openprocurement.org/api/2.5/tenders';

//       axios.get(apiUrl)
//         .then(response => {
//           res.send(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching tenders:', error);
//           res.status(500).send('Internal Server Error');
//           this.setState({ loading: false });
//         });
//     });
    
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });

//     componentDidMount(){
//       this.fetchTenders();
//     };
  
//     render() {
//       const { tenders, loading } = this.state;

//       const columns = [
//         { title: 'ID', dataIndex: 'id', key: 'id' },
//         { title: 'Название', dataIndex: 'title', key: 'title' },
//         // Добавьте другие столбцы, если необходимо
//       ];

//       return (
//         <div>
//           <Button onClick={this.fetchTenders} loading={loading}>
//             Загрузить тендеры
//           </Button>
//           <Table columns={columns} dataSource={tenders} loading={loading} />
//         </div>
//       );
//     }

//   };
// };
// export default TenderList;

import React, { Component } from 'react';
import { Button, Table } from 'antd';
import axios from 'axios';

class TenderList extends Component {
  state = {
    tenders: [],
    loading: false
  };

  fetchTenders = () => {
    this.setState({ loading: true });

    axios.get('https://public.api.openprocurement.org/api/2.5/tenders')
      .then(response => {
        const tenders = response.data;
        this.setState({ tenders, loading: false });
      })
      .catch(error => {
        console.error('Error fetching tenders:', error);
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    this.fetchTenders();
  }

  render() {
    const { tenders, loading } = this.state;

    const columns = [
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: 'Название', dataIndex: 'title', key: 'title' },
      // Добавьте другие столбцы, если необходимо
    ];

    return (
      <div>
        <Button onClick={this.fetchTenders} loading={loading}>
          Загрузить тендеры
        </Button>
        <Table columns={columns} dataSource={tenders} loading={loading} />
      </div>
    );
  }
}

export default TenderList;