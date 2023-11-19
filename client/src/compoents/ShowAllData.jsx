import React, { useEffect, useRef, useState } from 'react'
import { Table, Space, Tag, Alert,Button,Popconfirm, Pagination, Input } from 'antd'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux';
import { deleteuser } from '../redux/Userslice';
import Highlighter from 'react-highlight-words';
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'



function ShowAllData() {
  const [data, setdata] = useState([])
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
      dataIndex: 'id',
      align: 'center',
      render: (dataIndex) => (
        <Space size="middle">
          <Link to={`/updatestudent/${dataIndex}`}>
            <Button style={{color:'green'}}>Edit</Button>
          </Link>
          <Popconfirm title='are u sure'  color='lightblue' onConfirm={()=>handledelete(dataIndex)}>
           <Button danger  type='primary'>Delete</Button>
        </Popconfirm>

          <Link to={`/profilecard/${dataIndex}`}>
            <Button style={{color:'blue'}}>View</Button>
          </Link>
        </Space>
      ),
    },

  ])



  const handledelete = (id) => {
    const response = fetch(`https://cms-omega-ten.vercel.app/delete/data/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setloading(false)
      window.location.reload()
      setloading(true)
    })
  }

  return (

    <div>

      <form action="">
        <Table
          Table
          columns={columns}
          dataSource={users}
          loading={loading}
        />
      </form>
    </div>
  )
}

export default ShowAllData
