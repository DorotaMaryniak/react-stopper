import styles from './Render.module.scss';
const Render = props => {
    const mstoTime = ms => {
        let sec = Math.floor (ms/1000) % 60;
        let min = Math.floor((ms/1000)/60) % 60;
        let hour = Math.floor((ms/1000)/60/60)%24;
        let msec = Math.floor(ms - sec*1000);
        hour = (hour <10) ? "0" + hour:hour;
        min = (min < 10) ? "0"+ min:min;
        sec = (sec<10 ) ? "0" + sec:sec;
        return (`${hour} : ${min} : ${sec} . ${msec}`);}

    return (
        <div className={styles.title}>
            {mstoTime(props.time)}
        </div>
    );
  }
  export default Render;
