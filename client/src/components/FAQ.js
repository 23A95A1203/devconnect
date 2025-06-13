import { Accordion } from 'react-bootstrap';
const FAQ = () => (
  <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Who can participate?</Accordion.Header>
      <Accordion.Body>Both students and local businesses...</Accordion.Body>
    </Accordion.Item>
    {/* More items... */}
  </Accordion>
);
export default FAQ;
