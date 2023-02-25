interface CalendarTileContentProps {
  listFinded: any;
}

const CalendarTileContent = ({ listFinded }: CalendarTileContentProps) => {
  return <div>{listFinded.contents.emotion}</div>;
};

export default CalendarTileContent;
