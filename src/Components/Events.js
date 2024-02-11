import './Events.css'

export default function Event(props){
    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    //const day = props.date.toLocaleDateString(locale, {weekday: 'long'})
    // const date = props.date.getDate() + 'th';
    // const year = props.date.getFullYear();

    // const from = props.time.from;
    // const to = props.time.to;


    return(
    <div className='main-container'>
        {/* Location and Name */}
        <div className='event-name__container'>
            <p>Hiking</p>
            <p>Entoto Park</p>
        </div>
        {/* Date and Year Stuf Div */}
        <div className='event-date__container'>
            <div className='event-date__month'>Jan</div>
            <div className='event-date__date'>07</div>
            <div className='event-date__day'>Sunday</div>
            <div className='event-date__year'>2024</div>
        </div>

        {/* Time div */}
        <div className='event-time__container'><p>From 8pm to 10pm</p></div>
    </div>
    )
}