import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import * as EditorActions from '../../actions/editor';
import {State} from '../../constants/default-state';
import Renderer, {Props} from './renderer';
import {withRouter} from 'react-router-dom';

export function mapStateToProps(state: State, ownProps: Props) {
  return {
    configEditorString: state.configEditorString,
    editorRef: state.editorRef,
    isAuthenticated: state.isAuthenticated,
    lastPosition: state.lastPosition,
    manualParse: state.manualParse,
    mode: state.mode,
    name: state.name,
    profilePicUrl: state.profilePicUrl,
    settings: state.settings,
    vegaLiteSpec: state.vegaLiteSpec,
    vegaSpec: state.vegaSpec,
    view: state.view,
    designMode: state.designMode
  };
}

export function mapDispatchToProps(dispatch: Dispatch<EditorActions.Action>) {
  return bindActionCreators(
    {
      clearConfig: EditorActions.clearConfig,
      exportVega: EditorActions.exportVega,
      parseSpec: EditorActions.parseSpec,
      receiveCurrentUser: EditorActions.receiveCurrentUser,
      setConfig: EditorActions.setConfig,
      setConfigEditorString: EditorActions.setConfigEditorString,
      setScrollPosition: EditorActions.setScrollPosition,
      setSettingsState: EditorActions.setSettingsState,
      setThemeName: EditorActions.setThemeName,
      toggleAutoParse: EditorActions.toggleAutoParse,
      updateVegaSpec: EditorActions.updateVegaSpec,
      setDesignMode: EditorActions.setDesignMode
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Renderer));
