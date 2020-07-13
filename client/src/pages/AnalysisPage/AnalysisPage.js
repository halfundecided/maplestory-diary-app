import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Right,
} from 'native-base';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { PieChart, BarChart, ContributionGraph } from 'react-native-chart-kit';
import { AppHeader } from '../../components';

const windowWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#ffffff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(255, 147, 54, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const completeData = [
  {
    name: '0~30% 완료',
    num: 5,
    color: '#fe7f2d',
    legendFontColor: '#7F7F7F',
    legendFontSize: 10,
  },
  {
    name: '31~60% 완료',
    num: 10,
    color: '#fcca46',
    legendFontColor: '#7F7F7F',
    legendFontSize: 10,
  },
  {
    name: '61~100% 완료',
    num: 20,
    color: '#a1c181',
    legendFontColor: '#7F7F7F',
    legendFontSize: 10,
  },
];

const completeNum = {
  labels: ['0~30%', '31~60%', '61~100%'],
  datasets: [{ data: [5, 10, 20] }],
};

const coinData = [
  { date: '2017-01-02', count: 1 },
  { date: '2017-01-03', count: 2 },
  { date: '2017-01-04', count: 3 },
  { date: '2017-01-05', count: 4 },
  { date: '2017-01-06', count: 5 },
  { date: '2017-01-30', count: 2 },
  { date: '2017-01-31', count: 3 },
  { date: '2017-03-01', count: 2 },
  { date: '2017-04-02', count: 4 },
  { date: '2017-03-05', count: 2 },
  { date: '2017-02-30', count: 4 },
];
const AnalysisPage = () => {
  return (
    <Container>
      <AppHeader
        title={'통계'}
        subtitle={'📈숙제 한눈에 보기📉'}
        icon={'ellipsis-vertical-outline'}
      />
      <ScrollView>
        <Card transparent>
          <CardItem>
            <CalendarList
              horizontal={true}
              pagingEnabled={true}
              calendarWidth={380}
              markedDates={{
                '2020-07-12': {
                  marked: true,
                  dotColor: '#e76f51',
                  activeOpacity: 0,
                },
              }}
              markingType={'period'}
            />
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text style={styles.title}>이번달 숙제 완료율 통계</Text>
          </CardItem>
          <CardItem>
            <Body>
              <PieChart
                data={completeData}
                width={400}
                height={200}
                chartConfig={chartConfig}
                accessor="num"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
              />
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text style={styles.title}>이번달 숙제 완료 누적 횟수</Text>
          </CardItem>
          <CardItem>
            <Body>
              <BarChart
                data={completeNum}
                width={350}
                height={200}
                chartConfig={chartConfig}
              />
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text style={styles.title}>이벤트 코인 수급 현황</Text>
          </CardItem>
          <CardItem>
            <Body>
              <ContributionGraph
                values={coinData}
                endDate={new Date('2017-04-01')}
                numDays={105}
                width={350}
                height={220}
                chartConfig={chartConfig}
              />
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    color: 'black',
  },
  button: {
    marginLeft: 280,
    marginRight: 10,
  },
});

export default AnalysisPage;
