import React from 'react';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import '../../../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


export default class BoxScoreTable extends React.Component {

  addMLB(team) {

  }
  
  addNBA(team) {

  }

  addNFL(team) {

  }

  addNHL(team) {

  }

  addUFC(event) {

  }

  render() {
    const mlbData = [];
    const nbaData = [];
    const nflData = [];
    const nhlData = [];
    const ufcData = [];
    
    let boxscore;
    let sports;
    // MLB box-score
    if (sports === 'mlb') {
      boxscore = 
        <BootstrapTable data={mlbData} striped={true} hover={true} condensed={true}>
          <TableHeaderColumn row='0' colSpan='10'>Batting</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='batters' isKey>Batters</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ab'>Ab</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='r'>R</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='h'>H</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='rbi'>Rbi</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='bb'>Bb</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='so'>so</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='lob'>lob</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='avg'>avg</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ops'>ops</TableHeaderColumn>
          <TableHeaderColumn row='2' colSpan='9'>Pitching</TableHeaderColumn>
          <TableHeaderColumn row='3' dataField='pitchers'>Pitchers</TableHeaderColumn>
          <TableHeaderColumn row='3' dataField='ip'>ip</TableHeaderColumn>
          <TableHeaderColumn row='3' dataField='h'>h</TableHeaderColumn>
          <TableHeaderColumn row='3' dataField='r'>r</TableHeaderColumn>
          <TableHeaderColumn row='3' dataField='er'>er</TableHeaderColumn>
          <TableHeaderColumn row='3' dataField='bb'>bb</TableHeaderColumn>
          <TableHeaderColumn row='3' dataField='so'>so</TableHeaderColumn>
          <TableHeaderColumn row='3' dataField='hr'>hr</TableHeaderColumn>
          <TableHeaderColumn row='3' dataField='era'>era</TableHeaderColumn>
        </BootstrapTable>;
    }
  
    // NBA box-score
    if (sports === 'basketball') {
      boxscore = 
        <BootstrapTable data={nbaData} striped={true} hover={true} condensed={true}>
          <TableHeaderColumn row='0' colSpan='15' csvHeader='Starters'>Starters</TableHeaderColumn>
          <TableHeaderColumn row='0' dataField='name' isKey>Player</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='min'>Min</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='fg'>Fg</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='3pt'>3PT</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ft'>Ft</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='oreb'>Oreb</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='dreb'>Dreb</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='reb'>Reb</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ast'>Ast</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='stl'>Stl</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='blk'>Blk</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='to'>To</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='pf'>Pf</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='plusMinus'>+/-</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='pts'>Points</TableHeaderColumn>
          <TableHeaderColumn row='2' colSpan='15' csvHeader='Bench'>Bench</TableHeaderColumn>
        </BootstrapTable>;
    }
  
    // NFL box-score
    if (sports === 'football') {
      boxscore = 
        <BootstrapTable data={nflData} striped={true} hover={true} condensed={true}>
          <TableHeaderColumn row='0' dataField='name' rowspan='2' isKey>Name</TableHeaderColumn>
          <TableHeaderColumn row='0' colSpan='8'>Passing</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='catt'>C/Att</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='passyds'>Yds</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='passavg'>Avg</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='passtd'>Td</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='int'>Int</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='sacks'>Sacks</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='qbr'>Qbr</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='rtg'>Rtg</TableHeaderColumn>
          <TableHeaderColumn row='2' colSpan='4'>Rushing</TableHeaderColumn>
          <TableHeaderColumn row='3' dataField='car'>Car</TableHeaderColumn>
          <TableHeaderColumn row='3' dataField='rushyds'>Yds</TableHeaderColumn>
          <TableHeaderColumn row='3' dataField='rushavg'>Avg</TableHeaderColumn>
          <TableHeaderColumn row='3' dataField='rushtd'>Td</TableHeaderColumn>
          <TableHeaderColumn row='4' colSpan='5'>Receiving</TableHeaderColumn>
          <TableHeaderColumn row='5' dataField='rec'>Rec</TableHeaderColumn>
          <TableHeaderColumn row='5' dataField='tgts'>Tgts</TableHeaderColumn>
          <TableHeaderColumn row='5' dataField='recyds'>Yds</TableHeaderColumn>
          <TableHeaderColumn row='5' dataField='recavg'>Avg</TableHeaderColumn>
          <TableHeaderColumn row='5' dataField='rushtd'>Td</TableHeaderColumn>
          <TableHeaderColumn row='6' colSpan='3'>Defense</TableHeaderColumn>
          <TableHeaderColumn row='7' dataField='tackles'>Tackles</TableHeaderColumn>
          <TableHeaderColumn row='7' dataField='defsacks'>Sacks</TableHeaderColumn>
          <TableHeaderColumn row='7' dataField='defint'>Int</TableHeaderColumn>
        </BootstrapTable>;
    }
  
    // NHL box-score
    if (sports === 'hockey') {
      boxscore = 
        <BootstrapTable data={nhlData} striped={true} hover={true} condensed={true}>
          <TableHeaderColumn row='1' dataField='name' isKey>Player</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='goals'>G</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='assists'>A</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='plusminus'>+/-</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='sog'>Sog</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ms'>Ms</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='bs'>Bs</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='pn'>Pn</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='pim'>Pim</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ht'>Ht</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='tk'>Tk</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='gv'>Gv</TableHeaderColumn>
          <TableHeaderColumn row='0' colSpan='5'>Time On Ice</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='shf'>Shf</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='tot'>Tot</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='pp'>Pp</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='sh'>Sh</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ev'>Ev</TableHeaderColumn>
          <TableHeaderColumn row='2' colSpan='3'>Faceoffs</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='fw'>Fw</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='fl'>Fl</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='fwflpercent'>Points</TableHeaderColumn>
        </BootstrapTable>;
    }
    
    // UFC Fight Card - No Boxscore. Instead, upon click of the event item
    // user will be redirected to sportsradar UFC event page (need to grab id from ajax call)
    // e.g. http://ufc-data-api.ufc.com/api/v3/us/events/635181

    return (
      <div>
        {boxscore}
      </div>
    );
  }
}

// export default connect()(BoxScore)

// UFC will be events / fighters instead of teams / players