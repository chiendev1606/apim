import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'nprogress/nprogress.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SidebarProvider } from './contexts/SidebarContext';
import { rootStore } from './store';

import App from '@/App';

const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={rootStore}>
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <BrowserRouter>
          <App />
          <ReactQueryDevtools position="bottom-right" />
        </BrowserRouter>
      </SidebarProvider>
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root'),
);
