import React from 'react';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import '../../../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export class StatsTable extends React.Component {
  addMLB(team) {
    
  }
  
  addNBA(team) {


  }

  addNFL(team) {

  }

  addNHL(team) {

  }

  addUFC(fighter) {

  }


  render() {
    const mlbData = [];
    const nbaData = [];
    const nflData = [];
    const nhlData = [];
    const ufcData = [];

    let position;
    let seasonstats;
    let sports;

    // MLB box-score
    if (sports === 'mlb') {
      // Batting Stats
      if (position === 'sp' || 'rp') {
        seasonstats= 
          <BootstrapTable data={mlbData} striped={true} hover={true} condensed={true}>
            <TableHeaderColumn row='0' colSpan='19'>Season Stats</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='position'>Position</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='gp'>gp</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='gs'>gs</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='cg'>cg</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='sho'>sho</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='ip'>ip</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='h'>h</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='r'>r</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='er'>er</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='hr'>hr</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='bb'>bb</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='so'>so</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='w'>w</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='l'>l</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='sv'>sv</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='hld'>hlds</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='blsv'>blsv</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='whip'>whip</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='era'>era</TableHeaderColumn>
          </BootstrapTable>;
      } else {
      // Pitching stats
        seasonstats = 
          <BootstrapTable data={mlbData} striped={true} hover={true} condensed={true}>
            <TableHeaderColumn row='0' colSpan='17'>Season Stats</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='position'>Position</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='gp'>gp</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='ab'>ab</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='r'>r</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='h'>h</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='2b'>2b</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='3b'>3b</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='hr'>hr</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='rbi'>rbi</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='bb'>bb</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='so'>so</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='sb'>sb</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='cs'>cs</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='avg'>avg</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='obp'>obp</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='slg'>slg</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='ops'>ops</TableHeaderColumn>
          </BootstrapTable>;
      }
    }
  
    // NBA box-score
    if (sports === 'basketball') {
      seasonstats = 
        <BootstrapTable data={nbaData} striped={true} hover={true} condensed={true}>
          <TableHeaderColumn row='0' colSpan='16'>Season Stats</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='pos'>Position</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='gp'>Gp</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='mpg'>Mpg</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='fgmfga'>Fgm-Fga</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='fgpercent'>Fg%</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='3pm3pa'>3PM-3PA</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='3pointpercent'>3P%</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ftmfta'>Ftm-Fta</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ftpercent'>Ft%</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='reb'>Rpg</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ast'>Apg</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='stl'>Stlpg</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='blk'>Blkpg</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='to'>Topg</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='pf'>Pfpg</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='pts'>Ppg</TableHeaderColumn>
        </BootstrapTable>;
    }
  
    // NFL box-score
    if (sports === 'football') {
      if (position === 'qb') {
        // QB stats
        seasonstats = 
          <BootstrapTable data={nflData} striped={true} hover={true} condensed={true}>
            <TableHeaderColumn row='0' colSpan='12'>Season Stats</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='position'>Position</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='cmp'>cmp</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='att'>att</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='yds'>yds</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='cmppercent'>CMP%</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='avg'>avg</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='td'>td</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='lng'>lng</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='int'>int</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='fum'>fum</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='qbr'>qbr</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='rat'>rat</TableHeaderColumn>
          </BootstrapTable>;
      } else if (position === 'rb') {
        // RB stats
        seasonstats = 
          <BootstrapTable data={nflData} striped={true} hover={true} condensed={true}>
            <TableHeaderColumn row='0' colSpan='14'>Season Stats</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='position'>Position</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='att'>att</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='recyds'>yds</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='rushavg'>avg</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='rushlng'>lng</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='rushtd'>td</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='fd'>fd</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='rec'>rec</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='recyds'>yds</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='recavg'>avg</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='reclng'>lng</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='rectd'>td</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='fum'>fum</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='lst'>lst</TableHeaderColumn>
          </BootstrapTable>;
      } else if (position === 'wr') {
        // WR stats
        seasonstats = 
          <BootstrapTable data={nflData} striped={true} hover={true} condensed={true}>
            <TableHeaderColumn row='0' colSpan='15'>Season Stats</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='position'>Position</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='rec'>rec</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='tgts'>tgts</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='recyds'>yds</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='recavg'>avg</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='reclng'>lng</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='rectd'>td</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='fd'>fd</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='att'>att</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='recyds'>yds</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='rushavg'>avg</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='rushlng'>lng</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='rushtd'>td</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='fum'>fum</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='lst'>lst</TableHeaderColumn>
          </BootstrapTable>;
      } else {
        // Defense stats
        seasonstats = 
          <BootstrapTable data={nflData} striped={true} hover={true} condensed={true}>
            <TableHeaderColumn row='0' colSpan='17'>Season Stats</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='position'>Position</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='comb'>comb</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='total'>total</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='ast'>ast</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='sack'>sack</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='ff'>ff</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='fr'>fr</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='yds'>yds</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='int'>int</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='yds'>yds</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='avg'>avg</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='lng'>lng</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='td'>td</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='pd'>pd</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='stf'>stf</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='stfyds'>stfyds</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='kb'>kb</TableHeaderColumn>
          </BootstrapTable>;
      }
    }
  
    // NHL box-score
    if (sports === 'hockey') {
      // Offense stats
      seasonstats = 
        <BootstrapTable data={nhlData} striped={true} hover={true} condensed={true}>
          <TableHeaderColumn row='0' colSpan='16'>Season Stats</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='position'>Position</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='gp'>gp</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='g'>g</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='a'>a</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='pts'>pts</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='plusminus'>+/-</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='pim'>pim</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='sog'>sog</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='percentage'>%</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ppg'>ppg</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ppa'>ppa</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='shg'>shg%</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='sha'>sha</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='gwg'>gwg</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='toitog'>toi/g</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='prod'>prod</TableHeaderColumn>
        </BootstrapTable>;
  
      // Goalie stats
      seasonstats = 
        <BootstrapTable data={nhlData} striped={true} hover={true} condensed={true}>
          <TableHeaderColumn row='0' colSpan='14'>Season Stats</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='position'>Position</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='gp'>gp</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='gs'>gs</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='toitog'>toi/g</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='w'>w</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='l'>l</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='otl'>otl</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ga'>ga</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='gaa'>gaa</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='sa'>sa</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='sv'>sv</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='svpercent'>sv%</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='so'>so</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='sosvpercent'>sosv%</TableHeaderColumn>
        </BootstrapTable>;
    }
    
    // UFC - Upon clicking fighter name, user will be redirected to the fighter's page
    // e.g. http://ufc-data-api.ufc.com/api/v3/us/fighters/241895

    return (
      <div>
        {seasonstats}
      </div>
    );
  }
}