import React from 'react';
import MetricsGraphics from 'react-metrics-graphics';

export class Dashboard extends React.Component {
  render() {

      return (


      <div className="jumbotron">
        <h1>Welcome to Finance application</h1>
        <p>
          Finance help for you
            <MetricsGraphics
                title="Payments"
                // description="This graphic shows a time-series of downloads."
                data={ [{'date':new Date('2017-11-07'),'value':500}, {'date':new Date('2017-10-05'),'value':700}, {'date':new Date('2017-10-05'),'value':700}
                    , {'date':new Date('2017-06-12'),'value':300}
                    , {'date':new Date('2017-07-21'),'value':830}
                    , {'date':new Date('2017-09-15'),'value':780}]}
                width={600}
                height={250}
                x_accessor="date"
                y_accessor="value"
            />
        </p>
      </div>
    );
  }
}
