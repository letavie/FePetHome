import React, { useState, useEffect } from 'react';
import MyAxios from "../../../../../setup/configAxios";
import { Button, Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('day'); // Default to 'day'
  const [year, setYear] = useState(new Date().getFullYear());
  const [data, setData] = useState([]);

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };

  const getStartEndTime = (range) => {
    const currentDate = new Date();
    let startTime, endTime;

    switch (range) {
      case 'day':
        startTime = new Date(currentDate.setDate(currentDate.getDate() - 6)).toISOString().split('T')[0]; // Last 7 days
        endTime = new Date().toISOString().split('T')[0];
        break;
      case 'week':
        startTime = new Date(currentDate.setDate(currentDate.getDate() - 29)).toISOString().split('T')[0]; // Last 30 days
        endTime = new Date().toISOString().split('T')[0];
        break;
      case 'month':
        startTime = ''; 
        endTime = '';   
        break;
      default:
        startTime = endTime = '';
    }

    return { startTime, endTime };
  };

  useEffect(() => {
    const fetchData = async () => {
      const { startTime, endTime } = getStartEndTime(timeRange);
      let response;
      try {
        if (timeRange === 'day' || timeRange === 'week') {
          response = await MyAxios.get(`http://localhost:5000/api/v1/dashboard/daily?startTime=${startTime}&endTime=${endTime}&year=${year}`);
          setData(response.data.map(item => ({
            date: new Date(item.date).toLocaleDateString('en-US'),
            revenue: item.total
          })));
        } else if (timeRange === 'month') {
          response = await MyAxios.get(`http://localhost:5000/api/v1/dashboard/month?year=${year}`);
          setData(response.data.map(item => ({
            date: item.month,
            revenue: item.total
          })));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [timeRange, year]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Doanh thu của PetHome</h1>

        <div className="flex justify-end mb-4 space-x-2">
          <Button
            variant={timeRange === 'day' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleTimeRangeChange('day')}
          >
            Hằng ngày
          </Button>
          <Button
            variant={timeRange === 'week' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleTimeRangeChange('week')}
          >
            Theo tuần
          </Button>
          <Button
            variant={timeRange === 'month' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleTimeRangeChange('month')}
          >
            Theo tháng
          </Button>
        </div>

        <Card>
          <CardContent>
            <Typography variant="h6" component="div">
              Thống kê doanh thu
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
