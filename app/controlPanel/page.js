import c from './controlPanelPage.module.scss';
import Title from './title/title';
import Statistics from './statistics/statistics';
import Chart from './chart/chart';


export default function ControlPanel() {
  
  return (
    <>
      <div className={c.wrapper}>
        <div className="container">
            <div className={c.content}>
              <Title />
              <main className={c.main}>
                <Statistics />
                <Chart />
              </main>
            </div>
          </div>
      </div>
    </>
  );
}
