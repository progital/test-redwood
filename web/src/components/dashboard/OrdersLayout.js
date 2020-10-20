import { Flash } from '@redwoodjs/web';
import Button from 'components/ui/Button';
import { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, { Calendar } from 'react-modern-calendar-datepicker';
import OrdersCell from 'components/dashboard/OrdersCell';
import { priceToCents } from 'utils/helpers';

const inputStyle = {
  border: '1px solid rgba(0,0,0,0.2)',
  width: 150,
  borderRadius: 2,
  mx: 2,
};

const contStyle = {
  mb: 2,
};

const OrdersLayout = ({ actions, userId, ...props }) => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });
  const [startTotal, setStartTotal] = useState('');
  const [endTotal, setEndTotal] = useState('');

  let filter = {};

  const handleStartDate = () => {};
  const handleEndDate = () => {};
  const handleStartTotal = (e) => setStartTotal(e.target.value);
  const handleEndTotal = (e) => setEndTotal(e.target.value);

  if (startTotal) {
    filter.startTotal = priceToCents(startTotal);
  }
  if (endTotal) {
    filter.endTotal = priceToCents(endTotal);
  }
  if (selectedDayRange.from) {
    const { day, month, year } = selectedDayRange.from;
    const startDate = new Date(year, month - 1, day, 0, 0, 0);
    filter.startDate = startDate.toISOString();
  }
  if (selectedDayRange.to) {
    const { day, month, year } = selectedDayRange.to;
    const endDate = new Date(year, month - 1, day, 23, 59, 59);
    filter.endDate = endDate.toISOString();
  }

  return (
    <>
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <span sx={{ color: 'secondary' }}>Orders</span>
        </h1>
        <button
          onClick={actions.newOrder}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Order
        </button>
      </header>
      <div
        sx={{
          px: 4,
          py: 2,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          '.Calendar__monthYear': {
            fontSize: '1.2em',
          },
          '.DatePicker__input': {
            width: '300px',
          },
        }}
      >
        <span sx={contStyle}>
          <label>minimum total</label>
          <input
            type="text"
            sx={inputStyle}
            value={startTotal}
            onChange={handleStartTotal}
          />
        </span>
        <span sx={contStyle}>
          <label>maximum total</label>
          <input
            type="text"
            sx={inputStyle}
            value={endTotal}
            onChange={handleEndTotal}
          />
        </span>
        <span sx={contStyle}>
          <label sx={{ mr: 2 }}>select dates</label>

          <DatePicker
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            inputPlaceholder="Select a day range"
            renderFooter={() => {
              return (
                <div sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Button
                    onClick={() => {
                      setSelectedDayRange({
                        from: null,
                        to: null,
                      });
                    }}
                  >
                    Clear
                  </Button>
                </div>
              );
            }}
          />
        </span>
      </div>
      <main className="rw-main">
        <OrdersCell actions={actions} userId={userId} {...filter} />
      </main>
    </>
  );
};

export default OrdersLayout;
