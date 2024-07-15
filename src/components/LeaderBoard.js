import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Table, Progress } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

// Sample data (replace with actual data fetching or state management)
const leaderboardData = [
  { rank: 1, name: 'Alice', steps: 8000, caloriesBurned: 500, heartRate: 85, workoutTime: '2h 30m' },
  { rank: 2, name: 'Bob', steps: 7500, caloriesBurned: 480, heartRate: 80, workoutTime: '2h 15m' },
  { rank: 3, name: 'Charlie', steps: 7000, caloriesBurned: 450, heartRate: 78, workoutTime: '2h' },
  // Add more data as needed
];

const LeaderboardContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

const Leaderboard = () => {
  const [searchText, setSearchText] = useState('');

  // Filter function for search
  const filterByName = (value, record) =>
    record.name.toLowerCase().includes(value.toLowerCase());

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filterIcon: () => <SearchOutlined />,
      onFilter: (value, record) => filterByName(value, record),
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search name"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
        </div>
      ),
    },
    {
      title: 'Steps',
      dataIndex: 'steps',
      key: 'steps',
      render: (steps) => (
        <Progress type="circle" percent={(steps / 10000) * 100} width={50} format={() => `${steps}`} />
      ),
    },
    {
      title: 'Calories Burned',
      dataIndex: 'caloriesBurned',
      key: 'caloriesBurned',
      render: (caloriesBurned) => (
        <Progress
          type="circle"
          percent={(caloriesBurned / 600) * 100}
          width={50}
          format={() => `${caloriesBurned}`}
        />
      ),
    },
    {
      title: 'Heart Rate',
      dataIndex: 'heartRate',
      key: 'heartRate',
      render: (heartRate) => (
        <Progress type="circle" percent={(heartRate / 100) * 100} width={50} format={() => `${heartRate}`} />
      ),
    },
    {
      title: 'Workout Time',
      dataIndex: 'workoutTime',
      key: 'workoutTime',
    },
  ];

  return (
    <LeaderboardContainer>
      <SearchContainer>
        <Input
          placeholder="Search name"
          prefix={<SearchOutlined />}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 200 }}
        />
      </SearchContainer>
      <Table
        dataSource={leaderboardData.filter((item) => filterByName(searchText, item))}
        columns={columns}
        pagination={false}
      />
    </LeaderboardContainer>
  );
};

export default Leaderboard;
