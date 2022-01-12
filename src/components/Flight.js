export default function Flight({item}) {
    return (
        <div className={'sup'}>
                {item.mission_name} -{item.launch_year}
                <img src={item.links.mission_patch} alt="mission_patch"/>

        </div>
    );
}