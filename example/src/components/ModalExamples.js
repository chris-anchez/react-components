import React from 'react';
import Modal from '../../../src/components/Modal';
import Alert from '../../../src/components/Alert';
import Code from '../../../src/components/Code';

export default React.createClass({
  getInitialState() {
    return {
      toggleModal: false,
    };
  },

  render() {
    return (
      <section className="_full-width-row" id="Modal">
        <div className="_container _container_large">
          <h2 className="base--h2">Modal</h2>
          <div className="row">
            <button
              className="base--button"
              onClick={() => {
                this.setState({
                  toggleModal: !this.state.toggleModal,
                });
              }}
            >
              Toggle Modal
            </button>
            <Modal
              isOpen={this.state.toggleModal}
              onExit={() => {
                this.setState({
                  toggleModal: false,
                });
              }}
            >
              <h2 className="base--h2" style={{ textAlign: 'center' }}>Hello World</h2>
              <Alert type="error" color="red">This is an <b>error</b> message!</Alert>
              <p className="base--p">
                This is an example Error Message. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque a aliquet sem.
                Duis laoreet augue tellus, sed varius purus molestie nec.
                Nulla vitae finibus libero. Sed mattis, nisi nec gravida vulputate,
                nisl velit sollicitudin magna, malesuada luctus libero tellus a dui.
                In interdum eleifend elit, in cursus elit consectetur et.</p>
            </Modal>
          </div>
          <Code language="js">
{`
let onExit = () => {
  this.setState({
    toggleModal: false,
  });
}

...

<Modal
  isOpen={this.state.toggleModal} // boolean
  onExit={onExit}
>
  <h2 className="base--h2" style={{ textAlign: 'center' }}>Hello World</h2>
  <Alert type="error" color="red">This is an <b>error</b> message!</Alert>
  <p className="base--p">
    This is an example Error Message. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Pellentesque a aliquet sem.
    Duis laoreet augue tellus, sed varius purus molestie nec.
    Nulla vitae finibus libero. Sed mattis, nisi nec gravida vulputate,
    nisl velit sollicitudin magna, malesuada luctus libero tellus a dui.
    In interdum eleifend elit, in cursus elit consectetur et.</p>
</Modal>
`}
          </Code>
        </div>
      </section>
    );
  },
});