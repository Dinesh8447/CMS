import React, { useEffect, useState,useRef } from 'react'
import { Table, Space, Tag, Alert, Pagination ,Button,Input} from 'antd'
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {useDispatch, useSelector} from 'react-redux'
import Highlighter from 'react-highlight-words';
import StudentNavebar from '../StudentPage/StudentNavbar'


function ShowAllData_Student() {
  const [loading, setloading] = useState(false)
  const users = useSelector(state => state.user.user)
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  


  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            // icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
              color:'black'
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
     <MagnifyingGlassIcon style={{
      color: filtered ? '#1677ff' : undefined,width:'15px',height:'15px'
    }}/>      
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });




  const [columns, setcolumns] = useState([
    {
      title: 'Reg.No',
      dataIndex: 'regno',
      key: 'regno',
      sorter: (a, b) => a.regno - b.regno,
      width: '20%',
      ...getColumnSearchProps('regno')
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
      // render: (text) => <a>{text}</a>,
      // filters: [
      //   {
      //     text: "a",
      //     value: "a"
      //   },
      //   {
      //     text: "j",
      //     value: "j"
      //   }

      // ],
      // filterMode: 'tree',
      // filterSearch: true,
      // onFilter: (value, record) => record.name.startsWith(value),
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '20%',
    },
    {
      title: 'ExamFees',
      dataIndex: 'examfees',
      key: 'examfees',
      filters: [
        {
          text: 'paid',
          value: 'paid',
        },
        {
          text: 'unpaid',
          value: 'unpaid',
        },
        {
          text: 'pending',
          value: 'pending',
        },
      ],
      width: '20%',
      color:'black',
      onFilter: (value, record) => record.examfees.startsWith(value),
      render: (status) => (
        <Tag color={status == 'paid' ? 'green' : '' || status == 'unpaid' ? 'red' : '' || status == 'pending' ? 'yellow' : ''} key={status}>
          {status}
        </Tag>
      )
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      filters: [
        {
          text: 'MCA',
          value: 'MCA',
        },
        {
          text: 'MBA',
          value: 'MBA',
        },
      ],
      onFilter: (value, record) => record.department.startsWith(value),
      filterSearch: true,
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex:'id',
      render: (dataIndex) => (
        <Space size="middle">
          <Link to={`/profilecard/${dataIndex}`}>
          <Button primary color='primary'>View</Button>
          </Link>
        </Space>
      ),
    },

  ])


  // useEffect(() => {
  //   const fetchapi = async () => {
  //     await fetch('http://localhost:4000/get/alldata')
  //       .then(data => data.json())
  //       .then((result) => { dispatch(getuser(result)) })
  //       .catch(e => console.log(e))
  //   }
  //   fetchapi()
  // }, [])


  // const handledelete = async(id) =>{
  //   alert('are you sure')
  //   const response = await fetch(`http://localhost:4000/delete/data/${id}`,{
  //     method:'DELETE'
  //   }).then(alert('deleted'))
  //   }



  return (

    <div className='m-5'>
   
<StudentNavebar/>
      <form action="">
        <Table
          Table
          columns={columns}
          dataSource={users}
          loading={loading}
        //  pagination={}
        //  loading={loading}
        //  onChange={handleTableChange}
        />
      </form>
    </div>
  )
}

export default ShowAllData_Student;
