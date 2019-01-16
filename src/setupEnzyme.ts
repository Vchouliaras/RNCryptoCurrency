import 'jest-enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// import 'react-native'
// import Adapter from 'enzyme-adapter-react-16'
// import Enzyme from 'enzyme'

// /**
//  * Set up DOM in node.js environment for Enzyme to mount to
//  */
// import { JSDOM } from 'jsdom'

// const jsdom = new JSDOM('<!doctype html><html><body></body></html>')

// const { window } = jsdom

// function copyProps(src: {}, target: {}) {
//   Object.defineProperties(target, {
//     ...Object.getOwnPropertyDescriptors(src),
//     ...Object.getOwnPropertyDescriptors(target),
//   })
// }

// const globalAny:any = global

// // globalAny.document = globalAny.window.document
// // globalAny.window = globalAny.document.defaultView

// globalAny.window = window
// globalAny.document = window.document

// globalAny.navigator = {
//   userAgent: 'node.js',
// }
// copyProps(window, globalAny)

// /**
//  * Set up Enzyme to mount to DOM, simulate events,
//  * and inspect the DOM in tests.
//  */
// Enzyme.configure({ adapter: new Adapter() })

// /**
//  * Ignore some expected warnings
//  * see: https://jestjs.io/docs/en/tutorial-react.html#snapshot-testing-with-mocks-enzyme-and-react-16
//  * see https://github.com/Root-App/react-native-mock-render/issues/6
//  */
// const originalConsoleError = console.error
// console.error = (message: string) => {
//   if (message.startsWith('Warning:')) {
//     return
//   }

//   originalConsoleError(message)
// }
