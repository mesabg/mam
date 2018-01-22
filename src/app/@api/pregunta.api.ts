/**
 * Global imports
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Local imports
 */
import { ApiService, LazyParser, ServerError } from '@ms/api';
import { PreguntaResponse } from './#responses';

/**
 * Service description
 * - This service manage the data retrive within the API
 * to get "Banner" data.
 */
@Injectable()
export class PreguntaApi {
	constructor(private apiService:ApiService) { }

	/**
	 * Get preguntas contact
	 */

	public getContactQuestions():Observable<PreguntaResponse[]>{
        return Observable.create(observer => {
            let response:PreguntaResponse[] = [
                {
                    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit laborum, blanditiis rerum minima doloribus quos, pariatur animi repudiandae repellendus molestias dicta dignissimos labore dolorum error ipsum ut aut. Distinctio, inventore!',
					answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde molestias inventore, voluptatem consequatur harum dolorem et doloremque optio. Obcaecati consectetur distinctio voluptates saepe dolor molestias labore eius placeat, nihil alias.',
				},
				{
                    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quo nobis, pariatur enim. Obcaecati sequi voluptates amet voluptate labore earum iste, accusamus iure. Placeat tempore optio omnis beatae, veritatis quibusdam.',
					answer: 'Esta es la respuesta a la pregunta',
				},
				{
                    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi soluta, iste eum qui laboriosam unde doloremque vel quas voluptatem veniam eaque iusto! Sapiente aperiam ullam praesentium quas soluta vero itaque!',
					answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae tenetur dolor reiciendis, a officiis provident. Repudiandae quas iure atque! Sit quasi repellendus obcaecati ipsa id voluptate inventore libero ducimus dignissimos!',
				},
				{
                    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit blanditiis distinctio, architecto repudiandae eos non illo dolore autem quaerat omnis a fugiat officiis quidem earum magni fugit optio ratione nemo.',
					answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel rem, illo molestiae esse necessitatibus. Itaque reiciendis, aliquid iste, rerum accusamus in nobis omnis maxime officiis nostrum quisquam sit iure molestias.',
				},
				{
                    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus voluptatum adipisci id, voluptatibus incidunt! Porro facilis illo similique animi, culpa iste nisi natus corporis molestiae delectus, expedita sit beatae, atque!',
					answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sint veritatis, nemo fugiat excepturi aliquam quasi asperiores omnis alias quam repudiandae porro non deleniti quisquam suscipit voluptatibus amet quia nesciunt.',
                }
            ];
            observer.next(response);
            observer.complete();
        });
	}
}
