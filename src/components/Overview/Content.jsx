import React from 'react';
import fullGraph from './img/fullgraph.png';
import { Header } from '../Shared';
import Card from './Card';

const Content = () => {
  return (
    <div className='dashboard__container'>
      <Header />
      {/* -------------------------Cards -------------------------- */}
      <div className='cards__container'>
        <Card title='Unresolved' content='60' />
        <Card title='Overdue' content='16' />
        <Card title='Open' content='16' />
        <Card title='On hold' content='64' />
      </div>
      {/* --------------------------- Stats ------------------------- */}
      <div className='stats__container'>
        <div className='stats__graph'>
          <div className='stats__graph-title'> Today's trends</div>
          <div className='stats__subheader'>
            <div>as of 25 May 2019, 09:41 PM</div>
            <div className='stats__subheader-legend'>
              <svg
                width='18'
                height='2'
                viewBox='0 0 18 2'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1H17'
                  stroke='#3751FF'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
              <div>Today</div>
              <svg
                width='18'
                height='2'
                viewBox='0 0 18 2'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1H17'
                  stroke='#DFE0EB'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
              <div>Yesterday</div>
            </div>
          </div>
          <div className='graph'>
            <img src={fullGraph} alt='graph' />
          </div>
        </div>
        <div className='stats__card-container'>
          <div className='stats__card'>
            <div>Resolved</div>
            <div>449</div>
          </div>
          <div className='stats__card'>
            <div>Received</div>
            <div>426</div>
          </div>
          <div className='stats__card'>
            <div>Average first response time</div>
            <div>33m</div>
          </div>
          <div className='stats__card'>
            <div>Average response time</div>
            <div>3h 8m</div>
          </div>
          <div className='stats__card'>
            <div>Resolution within SLA</div>
            <div>94%</div>
          </div>
        </div>
      </div>
      {/* --------------------------- Stats summary ----------------- */}
      <div className='stats_summary__container'>
        <div className='stats_summary__card'>
          <div className='stats_summary__card-header'>
            <div>Unresolved tickets</div>
            <a href='#'> View details</a>
          </div>
          <div>Group: Support</div>
          <div className='stats_summary__card-container'>
            <div className='stats_summary__card-item'>
              <div>Waiting on Feature Request</div>
              <div>4238</div>
            </div>
            <div className='stats_summary__card-item'>
              <div>Awaiting Customer Response</div>
              <div>1005</div>
            </div>
            <div className='stats_summary__card-item'>
              <div>Awaiting Developer Fix</div>
              <div>914</div>
            </div>
            <div className='stats_summary__card-item'>
              <div>Pending</div>
              <div>281</div>
            </div>
          </div>
        </div>
        {/* ---------------------------------------- */}
        <div className='stats_summary__card'>
          <div className='stats_summary__card-header'>
            <div>Tasks</div>
            <a href='#'> View all</a>
          </div>
          <div>Today</div>
          <div className='stats_summary__card-container'>
            <div className='stats_summary__card-task'>
              <div>Create new task</div>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='24' height='24' rx='8' fill='#F0F1F7' />
                <path
                  d='M12 7V17'
                  stroke='#9FA2B4'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
                <path
                  d='M17 12L7 12'
                  stroke='#9FA2B4'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </div>
            <div className='stats_summary__card-item'>
              <div>
                <input type='radio' name='' id='' />
                Finish ticket update
              </div>
              <div className='warning'>URGENT</div>
            </div>
            <div className='stats_summary__card-item'>
              <div>
                <input type='radio' name='' id='' />
                Create new ticket example
              </div>
              <div className='success'>NEW</div>
            </div>
            <div className='stats_summary__card-item'>
              <div>
                <input type='radio' name='' id='' />
                Update ticket report
              </div>
              <div className='disabled'>DEFAULT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
